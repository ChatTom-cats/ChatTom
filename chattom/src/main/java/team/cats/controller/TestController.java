package team.cats.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/test")
public class TestController {

    @RequestMapping("/test1")
    public void test(@RequestBody Object data) {
        System.out.println(data);
    }
}
