$("a[href='#dark']").on('click', function() {
  $(this).html( $(this).html() == "Day" ? "Night" : "Day" )
})