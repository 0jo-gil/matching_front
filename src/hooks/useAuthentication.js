import {
  isAuthenticationState,
  loginFormState,
  loginState,
} from "@state/user/atoms/userState";
import { ACCESS_TOKEN_KEY } from "@utils/constant";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import useCommonQuery from "./useCommonQuery";
import { userApi } from "@services/user/userApi";

const useAuthentication = () => {
  // 회원 인증 훅
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);
  const [isAuthentication, setIsAuthentication] = useRecoilState(
    isAuthenticationState
  );
  const [loginFormValue, setLoginFormValue] = useRecoilState(loginFormState);

  /**
   * 로그인 액세스 토큰 저장
   */
  const setAccessToken = useCallback((token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }, []);

  const removeAccessToken = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }, []);

  const { request: userSignin } = useCommonQuery({
    query: userApi.signin,
    params: loginFormValue,
    callbacks: {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (err) => {
        console.log(err);
      },
    },
  });

  return {
    data: {},
    action: {
      setAccessToken,
      removeAccessToken,
      userSignin,
    },
  };
};

export default useAuthentication;

// import { useState, useEffect } from 'react';
// import usePopAlert from 'components/popAlert/hooks/usePopAlert';
// import useCommonQuery from 'common/hooks/useCommonQuery';
// import { useCommonMutation } from 'common/hooks';
// import { useNavigate } from 'react-router';
// import { useApiContext, useLoginContext } from 'common/context';
// import { useKakao } from 'common/hooks';

// function useLogin() {
//   const navigate = useNavigate();
//   const { showAlert } = usePopAlert();
//   const { isLogin, action: loginAction, loginState } = useLoginContext();
//   const { queries } = useApiContext();
//   const [enableLogin, setEnableLogin] = useState(true);

//   const { requestKakaoUnlink, requestKakaoLogout } = useKakao();

//   useEffect(() => {
//     return () => {
//       sessionStorage.removeItem('login_callback');
//     };
//   }, []);

//   const { requestAsync: requestMemberInfo } = useCommonMutation({
//     query: queries.myProfile,
//     callbacks: {
//       onSuccess: (data) => {
//         if (data.result_code === '0000') {
//           // console.log(data.result_data);
//           // memberAction.setMemberData(data.result_data);
//         } else {
//           showAlert('알림', data.result_message);
//         }
//       },
//       onError: (error) => {
//         showAlert('알림', '사용자 정보 조회에 실패했습니다.');
//       },
//     },
//   });

//   const { request: requestAuthorize } = useCommonMutation({
//     query: queries.authorize,
//     callbacks: {
//       onSuccess: (data) => {
//         if (data.result_code === '0000') {
//           loginAction.setLoginData(data.result_data);
//           localStorage.setItem('accessToken', loginState.accessToken);

//           // requestMemberInfo();
//           // setEnableLogin(false);

//           // window.ChannelIO('shutdown');
//           // console.log(
//           //   `memberId=[${data.result_data.member_seq}], name=[${data.result_data.member_name}], mobileNumber=[${data.result_data.phone}]`,
//           // );

//           window.ChannelIO(
//             'boot',
//             {
//               pluginKey: 'b1b2fb02-3d12-4b71-b160-fdf971314b1b',
//               customLauncherSelector: '.chat-icon-wrap',
//               hideChannelButtonOnBoot: true,
//               language: 'ko',
//               memberId: `${data.result_data.member_seq}`, //fill with user id
//               profile: {
//                 name: `${
//                   data.result_data.member_name
//                     ? data.result_data.member_name
//                     : ''
//                 }`, //fill with user name
//                 mobileNumber: `${
//                   data.result_data.profile && data.result_data.profile.phone
//                     ? data.result_data.profile.phone.replaceAll('+82 ', '0')
//                     : ''
//                 }`,
//                 email: `${
//                   data.result_data.profile && data.result_data.profile.email
//                     ? data.result_data.profile.email
//                     : ''
//                 }`,
//               },
//             },
//             function onBoot(error, user) {
//               if (error) {
//                 console.error(error);
//               } else {
//                 // console.log('useLogin : boot success=>', user);
//               }
//             },
//           );

//           let pathname = sessionStorage.getItem('login_callback');
//           sessionStorage.removeItem('login_callback');
//           pathname = pathname?.length > 0 ? pathname : '/';
//           navigate(pathname, { replace: true });
//         } else {
//           showAlert('알림', data.result_message);
//           sessionStorage.removeItem('login_callback');
//         }
//       },
//       onError: (error) => {
//         showAlert('알림', '인증에 실패했습니다.');
//         sessionStorage.removeItem('login_callback');
//       },
//     },
//   });

//   const { requestAsync: requestKakaoLogin } = useCommonMutation({
//     query: queries.kakaoLogin,
//     callbacks: {
//       onSuccess: (data) => {
//         if (data.result_code === '0000') {
//           // console.log(data.result_data);
//           const { accessToken, isNew, referralCode } = data.result_data;
//           loginAction.setAccessToken(accessToken);

//           // window.ChannelIO('boot', {
//           //   pluginKey: 'b1b2fb02-3d12-4b71-b160-fdf971314b1b',
//           //   customLauncherSelector: '.chat-icon-wrap',
//           //   hideChannelButtonOnBoot: true,
//           //   memberId: 'test123', //fill with user id
//           //   profile: {
//           //     name: 'TESTER', //fill with user name
//           //     mobileNumber: '01012341234', //fill with user phone number
//           //     CUSTOM_VALUE_1: 'VALUE_1', //any other custom meta data
//           //     CUSTOM_VALUE_2: 'VALUE_2',
//           //   },
//           // });

//           // window.ChannelIO('showChannelButton');

//           if (isNew) {
//             let registerUrl = '/register'+(referralCode?`?R=${referralCode}`:'');
//             showAlert(
//               '알림',
//               '가입되지 않은 회원입니다.\n회원가입 화면으로 이동합니다.',
//               {
//                 confirmHandler: () => navigate(registerUrl, { replace: true }),
//                 cancelHandler: () => navigate(registerUrl, { replace: true }),
//               },
//             );
//             return;
//           }

//           setEnableLogin(false);
//         } else {
//           showAlert('알림', data.result_message, {
//             confirmHandler: async () => {
//               await requestKakaoUnlink(
//                 sessionStorage.getItem('kakaoAccessToken'),
//               );
//               sessionStorage.removeItem('kakaoAccessToken');
//               // await requestKakaoLogout()
//               navigate('/login', { replace: true });
//             },
//             cancelHandler: () => navigate('/login', { replace: true }),
//           });
//         }
//       },
//       onError: (error) => {
//         showAlert('알림', '카카오 로그인에 실패했습니다.', {
//           confirmHandler: () => navigate('/login', { replace: true }),
//           cancelHandler: () => navigate('/login', { replace: true }),
//         });
//       },
//     },
//   });

//   const { requestAsync: requestKakaoJoin } = useCommonMutation({
//     query: queries.kakaoLogin,
//     callbacks: {
//       onSuccess: (data) => {
//         if (data.result_code === '0000') {
//           // console.log(data.result_data);
//           const { accessToken, isNew, referralCode } = data.result_data;
//           loginAction.setAccessToken(accessToken);

//           // window.ChannelIO('boot', {
//           //   pluginKey: 'b1b2fb02-3d12-4b71-b160-fdf971314b1b',
//           //   customLauncherSelector: '.chat-icon-wrap',
//           //   hideChannelButtonOnBoot: true,
//           //   memberId: 'test123', //fill with user id
//           //   profile: {
//           //     name: 'TESTER', //fill with user name
//           //     mobileNumber: '01012341234', //fill with user phone number
//           //     CUSTOM_VALUE_1: 'VALUE_1', //any other custom meta data
//           //     CUSTOM_VALUE_2: 'VALUE_2',
//           //   },
//           // });

//           // window.ChannelIO('showChannelButton');

//           if (!isNew) {
//             showAlert('알림', '이미 가입된 회원입니다.', {
//               confirmHandler: () => {
//                 setEnableLogin(false);
//               },
//               cancelHandler: () => {
//                 setEnableLogin(false);
//               },
//             });
//             return;
//           }

//           let registerUrl = '/register'+(referralCode?`?R=${referralCode}`:'');
//           navigate(registerUrl, { replace: true });
//         } else {
//           showAlert('알림', data.result_message, {
//             confirmHandler: async () => {
//               // console.log('request requestKakaoUnlink');
//               const kakaoLogout = await requestKakaoUnlink();

//               // console.log('kakaoLogout => ', kakaoLogout);
//               // requestKakaoUnlink()
//             },
//           });
//         }
//       },
//       onError: (error) => {
//         showAlert('알림', '카카오 회원가입에 실패했습니다.', {
//           confirmHandler: () => navigate('/login', { replace: true }),
//           cancelHandler: () => navigate('/login', { replace: true }),
//         });
//       },
//     },
//   });

//   // useEffect(() => {
//   //   if (!enableLogin && loginState.accessToken.length > 0) {
//   //     console.log(enableLogin, loginState.accessToken);
//   //     requestMemberInfo();
//   //   }
//   // }, [enableLogin, loginState.accessToken]);

//   useEffect(() => {
//     if (enableLogin) {
//       return;
//     }
//     if (loginState.accessToken && loginState.accessToken.length > 0) {
//       requestAuthorize();
//     }
//   }, [enableLogin, loginState.accessToken]);

//   return {
//     isLogin,
//     requestAuthorize,
//     requestKakaoLogin,
//     requestKakaoJoin,
//   };
// }

// export default useLogin;
