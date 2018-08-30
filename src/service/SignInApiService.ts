import { SignIn } from "./entities/SignIn";
import axios  from "../../node_modules/axios";
// import {app, use} from "../../node_modules/cors";

// const cors = require('cors');

// app.use(cors());

export default class SignInApiService {

    public static sendRequest(signInData: SignIn,callback: (items: string, error: object) => void) {

        var items: string = '';
        var requestUrl = "http://test.api.en.knowpia.cn/user/sign?token=";
        var tokenUrl: string = "http://test.api.en.knowpia.cn/auth/token?appkey=EN6400592&appsecret=d150e9782b333929090f7df2c57t4b3d";
        
        
        if(signInData)
        {
            axios.get(tokenUrl)
            .then((request) => {
                localStorage.setItem('token', request.data.token);
                let headers = {
                    'content-type': 'application/x-www-form-urlencoded'
                };
                const paramsSignUp = new URLSearchParams();
                paramsSignUp.append('account', signInData.account);
                paramsSignUp.append('password', signInData.password);
                axios.post(
                    requestUrl + localStorage.getItem("token"),
                    paramsSignUp,
                    {
                        headers: headers
                    }
                ).then((request)=> {
                    if(request.data.errcode === 0)
                    {
                        localStorage.setItem('userName', request.data.subject.account);
                        window.location.reload();
                    } else {
                        var error = {
                            globalError: request.data.errmsg
                        }
                        callback("",error);
                    }
                });
                }
            )
        }
    }
}