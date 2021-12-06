package team.cats.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.tencentcloudapi.common.Credential;
import com.tencentcloudapi.common.exception.TencentCloudSDKException;
import com.tencentcloudapi.common.profile.ClientProfile;
import com.tencentcloudapi.common.profile.HttpProfile;
import com.tencentcloudapi.nlp.v20190408.NlpClient;
import com.tencentcloudapi.nlp.v20190408.models.ChatBotRequest;
import com.tencentcloudapi.nlp.v20190408.models.ChatBotResponse;
import org.springframework.stereotype.Service;
import team.cats.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService {

    @Override
    public String getResp(String req) {
        try {
            Credential cred = new Credential("AKIDpVw85mS1MRHrBJEvOhnfJjvufBTXNzOZ", "1pRpzvd6LM9i3A3jAKEsGOIwKSLzMTN2");
            // 实例化一个http选项，可选的，没有特殊需求可以跳过
            HttpProfile httpProfile = new HttpProfile();
            httpProfile.setEndpoint("nlp.tencentcloudapi.com");
            // 实例化一个client选项，可选的，没有特殊需求可以跳过
            ClientProfile clientProfile = new ClientProfile();
            clientProfile.setHttpProfile(httpProfile);
            // 实例化要请求产品的client对象,clientProfile是可选的
            NlpClient client = new NlpClient(cred, "ap-guangzhou", clientProfile);
            // 实例化一个请求对象,每个接口都会对应一个request对象
            ChatBotRequest request = new ChatBotRequest();
            request.setQuery(req);
            // 返回的resp是一个ChatBotResponse的实例，与请求对象对应
            ChatBotResponse resp = client.ChatBot(request);
            // 输出json格式的字符串回包
            JSONObject jsonObject = JSONObject.parseObject(ChatBotResponse.toJsonString(resp));
            System.out.println(jsonObject);
            return jsonObject.getString("Reply");
        } catch (TencentCloudSDKException e) {
            e.printStackTrace();
        }
        return null;
    }
}
