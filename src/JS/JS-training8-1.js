function getTimeFromMinutes(minutes) {

  if (minutes < 0 || !Number.isInteger(minutes)) {
    return ('Ошибка, проверьте данные');
  } else {

    let totalHours = Math.floor(minutes / 60);
    let totalMinutes = minutes % 60;

      if (totalHours === 0 || totalHours > 4) {
       return (`Это ${totalHours} часов и ${totalMinutes} минут`);
     } else if (totalHours === 1) {
       return (`Это ${totalHours} час и ${totalMinutes} минут`);
     } else {
       return (`Это ${totalHours} часа и ${totalMinutes} минут`);
    }
  }

}
console.log(getTimeFromMinutes(160));
