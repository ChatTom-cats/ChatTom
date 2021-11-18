package team.cats.pojo;

import com.baomidou.mybatisplus.annotations.TableName;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

/**
 * 使用了lombok插件，自动生成setter、getter、toString等
 * IDEA也要安装lombok检查插件，要不然界面报错（运行没问题）
 */
@Data
@ToString
@TableName("t_user")
public class User implements Serializable {

    private String id;
    private String username;
    private String gender;
    private Integer age;

}
