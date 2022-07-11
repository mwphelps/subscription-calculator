// Variable declarations

var subTypeElement = document.querySelector('#subscription');
var subDurationElement = document.querySelector('#months');
var result = document.querySelector('.result');
var subType = 'basic';
var subDuration = Number('1');

// Event Listeners

subTypeElement.addEventListener('change', function (e) {
  subType = e.target.value;
  updateSubsciptionDiv();
});

subDurationElement.addEventListener('change', function (e) {
  subDuration = Number(e.target.value);
  updateSubsciptionDiv();
});

/* A function that caculates cost of subscription
(called by both change event listeners) */

var updateSubsciptionDiv = function () {
  var monthlyCosts = Number('5');
  if (subType == 'standard') {
    monthlyCosts = Number('7');
  } else if (subType == 'premium') {
    monthlyCosts = Number('10');
  }
  var total = subDuration * monthlyCosts;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
