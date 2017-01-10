export default function() {
  this.get('/grudges');
  this.post('/grudges');
  this.get('/grudges/:id');
  this.put('/grudges/:id');
  this.patch('/grudges/:id');
  this.del('/grudges/:id');
}
