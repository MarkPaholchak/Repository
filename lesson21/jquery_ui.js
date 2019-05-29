$(function () {
    $('#dragable').draggable();
    var count = [0,0], $out_counter = $('#event-out'), $drop_counter = $('#event-drop');
    $('#droppable').droppable({
        out: function() {
            count[ 0 ]++;
            updateCounterStatus( $out_counter, count[ 0 ] );
        },
        drop: function() {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Пересунуто успішно! :)");
            count[ 1 ]++;
            updateCounterStatus( $drop_counter, count[ 1 ] );
            
        }
    });
    function updateCounterStatus( $event_counter, new_count ) {
      if ( !$event_counter.hasClass( "ui-state-hover" ) ) {
        $event_counter.addClass( "ui-state-hover" )
          .siblings().removeClass( "ui-state-hover" );
      }
      $( "span.count", $event_counter ).text( new_count );
    }
});
$(function () {
    $("#accordion").accordion({
        collapsible: true
    });
});
