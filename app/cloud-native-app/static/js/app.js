function User(data) {
    this.id = ko.observable(data.id);
    this.name = ko.observable(data.name);
    this.username = ko.observable(data.username);
    this.password = ko.observable(data.password);
    this.email = ko.observable(data.email);
}

function UserListViewModel() {
    var self = this;
    self.user_list = ko.observableArray([]);
    self.name = ko.observable();
    self.username = ko.observable();
    self.password = ko.observable();
    self.email = ko.observable();

    self.addUser = function () {
        self.save();
        location.reload();
        self.name("");
        self.username("");
        self.password("");
        self.email("");
    };

    $.getJSON('/api/v1/users', function(userModels) {
        var t = $.map(userModels.user_list, function (item) {
            return new User(item);
        });
        self.user_list(t);
    });

    self.save = function () {
        return $.ajax({
            url: '/api/v1/users',
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify({
                'name': self.name(),
                'username': self.username(),
                'password': self.password(),
                'email': self.email()
            }),
            success: function (data) {
                alert("success");
                console.log("Pushing to users array");
                // 双向数据绑定
                self = new Array();
                self.push(new User({
                    name: data.name,
                    username: data.username,
                    password: data.password,
                    email: data.email
                }));
                return;
            },
            error: function () {
                return console.log("Failed");
            }
        });
    };
}

ko.applyBindings(new UserListViewModel());