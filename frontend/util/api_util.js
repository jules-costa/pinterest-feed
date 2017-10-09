export const fetchItems = (num) => (
  $.ajax({
    method: 'GET',
    url: '/pins',
    data: {num}
  })
);
