
function toggleMenu(){
  const nav = document.getElementById('nav');
  if(!nav) return;
  const visible = getComputedStyle(nav).display !== 'none';
  nav.style.display = visible ? 'none' : 'flex';
}

function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const grade = document.getElementById('grade').value.trim();
  const subjects = document.getElementById('subjects').value.trim();
  const notes = document.getElementById('notes').value.trim();

  const body = encodeURIComponent(
    `Hello Evergreen Tutoring Co.,%0D%0A%0D%0A` +
    `Name: ${name}%0D%0A` +
    `Email: ${email}%0D%0A` +
    `Grade: ${grade}%0D%0A` +
    `Subject(s): ${subjects}%0D%0A` +
    `Notes: ${notes}%0D%0A%0D%0A` +
    `Thanks!`
  );
  const mailto = `mailto:saxena.nimit15@gmail.com?subject=Tutoring Inquiry — ${encodeURIComponent(name)}&body=${body}`;
  window.location.href = mailto;

  const status = document.getElementById('status');
  if(status){
    status.textContent = "Opening your email client…";
  }
  return false;
}
