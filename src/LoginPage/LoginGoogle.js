import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "182707061467-le8c478gqh40is54rrnrpqldfvc2amdr.apps.googleusercontent.com";

export default function GoogleLoginBtn({ onGoogleLogin }){
    const onSuccess = async(response) => {
        const { googleId, profileObj : { email, name } } = response;

        await onGoogleLogin (
            // 구글 로그인 성공시 서버에 전달할 데이터
        );
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}