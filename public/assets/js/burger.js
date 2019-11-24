$(function()
{
    $("#newBurgerButton").on("click", function(event)
    {
        event.preventDefault();

        var newBurger =
        {
            burger_name: $("#newBurger").val().trim(),
        };

        if($("#newBurger").val().trim() === "")
        {
            return;
        }
   
        $("#newBurger").val("");

        $.ajax("/api/burgers",
        {
            type: "POST",
            data: newBurger
        }).then(function()
          {
                console.log("Added new burger");
                // Reload the page to get the updated list
                location.reload();
          }
        );
    });

    $(".devourBurgerBtn").on("click", function(event)
    {
        var burgerID = $(this).attr("data-id");
        console.log(burgerID);

        $.ajax("/api/burgers/" + burgerID,
        {
            type: "PUT",
        }).then(function()
        {
            location.reload();
        });
    });

    $(".deleteBurgerBtn").on("click", function(event)
    {
        var burgerID = $(this).attr("data-id");
        console.log(burgerID);

        $.ajax("/api/burgers/" + burgerID,
        {
            type: "DELETE",
        }).then(function()
        {
            location.reload();
        });
    });

})