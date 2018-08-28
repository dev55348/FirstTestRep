import { SignUp } from "./entities/SignUp";
import axios  from "../../node_modules/axios";
// import {app, use} from "../../node_modules/cors";

// const cors = require('cors');

// app.use(cors());

export default class SignUpApiService {

    public static sendRequest(signUpData: SignUp,callback: (item: object) => void) {

        var items: string = '';
        var requestUrl = "http://test.api.en.knowpia.cn/user/regiest?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzUzNzE3MjcsImlhdCI6MTUzNTM2NDUyNywia2V5IjoiRU42NDAwNTkyIiwic2lkIjoiaGhmcTlvamRvNHJ1ZW0yNXVkM2VuMGFuYjUifQ._buFu08bEcL7-JeOXC_ImKa2_2DHNc5YOIKeNWISmHI";
        debugger;
        if(signUpData)
        {
            var item = {
                id: 867,
                pid: 0,
                account: "testAPIaccount2",
                mobile: "",
                email: "testapi2@mail.com",
                truename: "",
                prov: "",
                city: "",
                dict: "",
                login: 0,
                create_time: 1535364612,
                status: 1,
                last_ip: "",
                last_time: 0,
                nickname: "",
                sex: 0,
                birthday: "0000-00-00",
                profile: ""
            }
            setTimeout(() => {
                callback(item);
            }, 1000);
            
        }

        
    }

}