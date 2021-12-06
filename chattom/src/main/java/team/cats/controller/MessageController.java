package team.cats.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import team.cats.service.MessageService;

@Controller
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private MessageService messageService;


    @RequestMapping("/getResp")
    @ResponseBody
    public String getResp(@RequestBody JSONObject reqMsg) {

        String req = reqMsg.getString("reqMsg");
        System.out.println(req);
        String resp = messageService.getResp(req);
        if(resp != null) {
            return resp;
        }
        return "";
    }
}
