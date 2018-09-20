$(document).on('scroll', function () {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  const $art2 = $('.art2');
  const art2FromTop = $art2.offset().top; // pobieramy gdzie ten element jest od początku układu
  const art2Height = $art2.outerHeight(); // outerHeight pobranie wysokości elementu z padingiem i borderem

  const $art3 = $('.art3');
  const art3FromTop = $art3.offset().top; // pobieramy gdzie ten element jest od początku układu
  const art3Height = $art3.outerHeight();

  const $art4 = $('.art4');
  const art4FromTop = $art4.offset().top; // pobieramy gdzie ten element jest od początku układu
  const art4Height = $art4.outerHeight();

  //quotes cytaty

  const $op1 = $('.op1');
  const op1FromTop = $op1.offset().top; // pobieramy gdzie ten element jest od początku układu
  const op1Height = $op1.outerHeight();
  // console.log(op1FromTop);
  // console.log(windowHeight);
  // console.log(op1Height);
  // console.log(scrollValue);


  const $op2 = $('.op2');
  const op2FromTop = $op2.offset().top; // pobieramy gdzie ten element jest od początku układu
  const op2Height = $op2.outerHeight();

  if (scrollValue > art2FromTop + art2Height - windowHeight) {
    $art2.addClass('active');
  }
  if (scrollValue > art3FromTop + art3Height - windowHeight) {
    $art3.addClass('active');
  }
  if (scrollValue > art4FromTop + art4Height - windowHeight) {
    $art4.addClass('active');
  }
  if (scrollValue > op1FromTop + op1Height / 4 - windowHeight) {
    $op1.addClass('active');
  }
  if (scrollValue > op2FromTop + op2Height / 4 - windowHeight) {
    $op2.addClass('active');
  }
  if (scrollValue < 100) { //jeśli wysokość scrolla jest mniejsza niż 100 px Pamiętaj nie piszemy PX to zabierz klasę active
    $('article').removeClass('active');
  }
})