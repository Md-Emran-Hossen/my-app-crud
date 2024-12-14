
import toast from 'react-hot-toast';

class FormHelper {
    IsEmpty(value) {
        return value.length === 0;
    }
    // IsMobile(value){
    //     return MobileRegx.test(value);
    // }
    // IsEmail(value) {
    //     return !EmailRegx.test(value);
    // }
    ErrorToast(msg) {
        toast.error(msg);
    }
    SuccessToast(msg) {
        toast.success(msg);
    }
}
export const {IsEmpty, ErrorToast, SuccessToast} = new FormHelper();