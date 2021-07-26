// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// VOTRE NOM ET PRENOM ICI !Soumaya KHAIR

function solutionExercice1(N) {
  var res = 'EXERCICE 1';
  //TAPE LE CODE DE L'EXERCICE 1 ICI!

  for (let i = N; i > 0; i--) {
    arrayStr = i + '';
    let tmp = 0;
    for (let j = 0; j < arrayStr.lenght; j++) {
      if (tmp <= parseInt(arrayStr.charAt(j))) {
        tmp = parseInt(arrayStr.charAt(j));
      } else {
        tmp = 0;
        break;
      }
    }
    if (tmp != 0) {
      return i;
    }
  }
  return N;
}
console.log(solutionExercice1(123));
// return res

function solutionExercice2(l) {
  var res = 'EXERCICE 2';
  //TAPE LE CODE DE L'EXERCICE 2 ICI!
  function solution2(l) {
    var len = l.length;
    // fonction de tri
    l.sort(function(a, b) {
      return a - b;
    });
    var res;
    var t = [];
    var j = 0;
    for (let i = 0; i < len; i++) {
      if (l[i] > 1) {
        t[j] = l[i];
        j++;
      }
    }
    var len_t = t.length;
    console.log(t);
    for (let i = 0; i < len_t; i++) {
      if (t[i] + 1 != t[i + 1]) {
        res = t[i] + 1;
        return res;
      }
    }
  }
  console.log(solution2([-1, 1, -9, 8]));

  return res;
}
function solutionExercice3(L) {
  var res = 'EXERCICE 3';
  //TAPE LE CODE DE L'EXERCICE 3 ICI!
  function checkValue(nbr, arr) {
    var tmp = 0;
    for (var i = 0; i < arr.length; i++) {
      if (nbr == arr[i]) tmp++;
    }

    return tmp;
  }

  function solution3(L) {
    for (var i = 0; i < L.length; i++) {
      if (checkValue(L[i], L) == 1) return L[i];
    }
  }

  console.log(solution3([1, 5, 3, 6, 4, 3, 1, 5, 4]));
  return res;
}

helper.displayOnHtml(solutionExercice1(1000), '1');
helper.displayOnHtml(solutionExercice2([1, 4, 7, 5, 3, 6, 3]), '2');
helper.displayOnHtml(solutionExercice3([1, 5, 3, 6, 4, 3, 1, 5, 4]), '3');
