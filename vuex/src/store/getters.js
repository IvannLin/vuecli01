export default{

        reverseMsg:function (state) {
            return state.msg.split('').reverse().join('')
        },
        mixMsg:function (state) {
            return '123456' + state.msg
        },

}