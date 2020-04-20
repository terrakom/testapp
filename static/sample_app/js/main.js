var sapp = {
    open_menu: function(){
        // open a WUI alert box
        katana.openAlert({'alert_type': 'success',
                        'heading': 'Menu',
                        'text': 'Menu changes everyday, enjoy!',
                        });
    },

    validate: function(){
        if (! Number.isInteger(parseInt($(this).val()))) {
            katana.openAlert({'alert_type': 'warning',
                             'heading': 'Invalid input',
                             'text': 'Input has to be an integer',
                             });
        }
    },

    delete: function(){
        $(this).closest(".row").remove();
    },

    send: function(){
        if (Number.isInteger(parseInt($(this).siblings("input").val())) && $("#is-hungry").prop('checked')) {
            var csrftoken = katana.$activeTab.find("[name='csrfmiddlewaretoken']").val();
            // jquery ajax is clear, katana.templateAPI.post is easy to write
            // both achieve the same functionality
            $.ajax({
                url: "sample_app/send_request",
                type: "POST",
                headers: {'X-CSRFToken':csrftoken},
                data: {"count": $(this).siblings("input").val()},
                success: function(data){
                    handler = katana.$activeTab.find("#sapp-template-row").clone()
                    handler.find(".col-sm-10").html(data);
                    katana.$activeTab.find("#sapp-food-table").append(handler.html());
                }
            });
        }
        if (! $("#is-hungry").prop("checked")) {
            katana.openAlert({'alert_type': 'warning',
                             'heading': 'Huh?',
                             'text': 'Please try again when you are hungry',
                             });
        }
    },

    hide: function(){
        $(this).hide();
    }
}