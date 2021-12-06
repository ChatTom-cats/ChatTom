package team.cats.controller;


import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import team.cats.pojo.User;
import team.cats.service.UserService;
import team.cats.util.WeChatUtil;


@Controller
@RequestMapping("/user")
public class UserController {

    @Value("${wechat.appid}")
    private String appid;
    @Value("${wechat.secret}")
    private String secret;

    @Autowired
    private UserService userService;

    @RequestMapping("/register")
    @ResponseBody
    public String register(@RequestBody JSONObject userMsg) {
        User user = new User();
        user.setId(userMsg.getString("openid"));
        user.setUsername(userMsg.getString("name"));
        user.setAge(Integer.valueOf(userMsg.getString("age")));
        user.setGender(userMsg.getString("sex"));
        System.out.println(user);
        Boolean isSuccess = userService.register(user);
        System.out.println(isSuccess);
        return "";
    }

    @RequestMapping("/getID")
    @ResponseBody
    public String getID(@RequestBody JSONObject code) {
        String url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid + "&secret=" + secret + "&js_code=JSCODE&grant_type=authorization_code";
        url=url.replaceAll("JSCODE", code.getString("code"));
        String str = WeChatUtil.httpRequest(url, "GET", null);
        JSONObject jsonObject = JSONObject.parseObject(str);
        String openid = (String) jsonObject.get("openid");
        if(userService.isRegistered(openid)) {
            return "pass";
        } else {
            // 执行get请求
            return openid;
        }
    }
}
