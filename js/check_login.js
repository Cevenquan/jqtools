/**
 * Created by Cevenquan on 2017/1/4.
 */

//手机验证
 function is_mobile(mobile)
{
                    
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))){
        alert('请输入正确的手机号！');
        return false;                 
    }

}