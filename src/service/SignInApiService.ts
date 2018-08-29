import { SignIn } from "./entities/SignIn";
import axios  from "../../node_modules/axios";
// import {app, use} from "../../node_modules/cors";

// const cors = require('cors');

// app.use(cors());

export default class SignInApiService {

    public static sendRequest(signInData: SignIn,callback: (items: string) => void) {

        var items: string = '';
        var requestUrl = "http://test.api.en.knowpia.cn/user/sign?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzU1NDIwODUsImlhdCI6MTUzNTUzNDg4NSwia2V5IjoiRU42NDAwNTkyIiwic2lkIjoiaGhmcTlvamRvNHJ1ZW0yNXVkM2VuMGFuYjUifQ.a7aue43DKO2mQ7swyorVd5KH26RfJMSjXh_fxb_lHAg";
        debugger;
        const params = new URLSearchParams();
        params.append('account', 'testAPIaccount');
        params.append('password', '12345678');
        if(signInData)
        {
            let headers = {
                'content-type': 'application/x-www-form-urlencoded'
            };
            axios.post(
                requestUrl,
                params,
                {
                    headers: headers
                }
            ).then((request)=> {
                debugger;
            })
            
        }

        
    }

}