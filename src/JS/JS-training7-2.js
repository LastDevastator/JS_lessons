
function getCoupeNumber(placeNumber) {

  if (placeNumber > 36 || placeNumber ==0) {
    return ('Таких мест в вагоне не существует');
  } else if (!Number.isInteger(placeNumber) || placeNumber < 0) {
    return ('Ошибка. Проверьте правильность введенного номера места');
  } else {
    return (Math.ceil(placeNumber / 4));
  }
}

