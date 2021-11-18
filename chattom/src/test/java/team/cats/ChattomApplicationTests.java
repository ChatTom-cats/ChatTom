package team.cats;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.tencentcloudapi.aai.v20180522.AaiClient;
import com.tencentcloudapi.aai.v20180522.models.ChatRequest;
import com.tencentcloudapi.aai.v20180522.models.ChatResponse;
import com.tencentcloudapi.common.Credential;
import com.tencentcloudapi.common.exception.TencentCloudSDKException;
import com.tencentcloudapi.common.profile.ClientProfile;
import com.tencentcloudapi.common.profile.HttpProfile;
import com.tencentcloudapi.nlp.v20190408.NlpClient;
import com.tencentcloudapi.nlp.v20190408.models.ChatBotRequest;
import com.tencentcloudapi.nlp.v20190408.models.ChatBotResponse;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import team.cats.mapper.UserMapper;
import team.cats.pojo.User;

import java.util.List;

@SpringBootTest
class ChattomApplicationTests {

    @Autowired
    private UserMapper userMapper;

    @Test
    void contextLoads() {
    }

    @Test
    public void add() {
        User user = new User();
        user.setUsername("tomy");
        user.setGender("男");
        user.setAge(20);
        userMapper.insert(user);
        System.out.println(user);
    }

    @Test
    public void findByCondition() {
        EntityWrapper<User> ew = new EntityWrapper<>();
        ew.eq("username","tomy");
        List<User> users = userMapper.selectList(ew);
        System.out.println(users);
    }

    @Test
    public void findByPage() {
        List<User> users = userMapper.selectPage(
                new Page(1,2),
                new EntityWrapper<User>().gt("id", 1)
        );
        System.out.println(users);
    }

    @Test
    public void test() {
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
            ChatBotRequest req = new ChatBotRequest();
            req.setQuery("我是你爹");
            // 返回的resp是一个ChatBotResponse的实例，与请求对象对应
            ChatBotResponse resp = client.ChatBot(req);
            // 输出json格式的字符串回包
            System.out.println(ChatBotResponse.toJsonString(resp));
        } catch (TencentCloudSDKException e) {
            e.printStackTrace();
        }

    }



}
