"use strict";
var User = (function () {
    function User() {
    }
    User.prototype.isnotNull = function () {
        if (this.username && this.password)
            return true;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUFRQSxDQUFDO0lBSkEsd0JBQVMsR0FBVDtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUNGLFdBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuIFxyXG4gaXNub3ROdWxsKCkge1xyXG4gICBpZih0aGlzLnVzZXJuYW1lICYmIHRoaXMucGFzc3dvcmQpXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuIH1cclxufSJdfQ==