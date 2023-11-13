function formatDate(inputDate) {
    const currentDate = new Date();
    const enteredDate = new Date(inputDate);
  
    const timeDiff = currentDate - enteredDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    if (daysDiff === 0) {
      return 'Сьогодні';
    } else if (daysDiff === 1) {
      return 'Вчора';
    } else if (daysDiff >= 2 && daysDiff <= 6) {
      return `${daysDiff} дні тому`;
    } else if (daysDiff === 7) {
      return 'Тиждень тому';
    } else if (daysDiff >= 365) {
      return 'Рік тому';
    } else {
      const formattedDate = enteredDate.toISOString().slice(0, 10).replace(/-/g, '.');
      return formattedDate;
    }
  }