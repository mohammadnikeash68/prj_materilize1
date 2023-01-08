document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
      edge : 'right',
      draggable : 'true'
    });

    var tabs = document.querySelectorAll(".navbar_content_ul");
    M.Tabs.init(tabs, {
      swipeable:true
    });

    var collapsElment = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(collapsElment, {});

   
    var autoInput = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(autoInput, {
      data:{
      "آب مشاع":null,
      "مشاع":null,
      "برق":null,
      "گاز":null
    }
    });


    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true,
      hoverEnabled: true
    });


    var inputSelect = document.querySelectorAll('select');
    var instances = M.FormSelect.init(inputSelect, {});


   var quick_accessor = Array.prototype.slice.call(document.querySelectorAll('.quick_access_item'));
    for(const item of quick_accessor){
      item.addEventListener('click',function(){
        var index = quick_accessor.indexOf(item) + 1;
        var menuItemMobile = document.querySelectorAll('.menu_item_mobile');
        setTimeout(()=>{
          menuItemMobile[index].click();
        },100)
      })
    }
    animateProgressBar('payProgressPath','payProgressText','50')
    animateProgressBar('freeProgressPath','freeProgressText','90')
    animateProgressBar('costProgressPath','costProgressText','100')
    function animateProgressBar(pathDomId,textDomId,precent){
      let startPrecent = 0;
      let maxPrecent = precent;

      let startProgress = 0;
      let maxProgress = 253;

      let progressInterVal = setInterval(function(){
        if(startPrecent <= maxPrecent){
          document.getElementById(pathDomId).setAttribute('stroke-dasharray',`${startProgress},${maxProgress}`);
          document.getElementById(textDomId).innerHTML= startPrecent + "%";

          startPrecent += 1;
          startProgress += 2.53;
          maxProgress -= 2.53;
        }else{
          clearInterval(progressInterVal);
        }
        
      },100);
    }
  });


 