let selectedActivity = null;

function selectActivity(element, activity) {
  document.querySelectorAll('.activity-card').forEach(card => {
    card.classList.remove('selected');
  });
  element.classList.add('selected');
  selectedActivity = activity;
}

function openCamera() {
  if (!selectedActivity) {
    alert('กรุณาเลือกกิจกรรมก่อนถ่ายรูป 📸');
    return;
  }
  alert(`ไปที่หน้า Camera เพื่อทำกิจกรรม: ${selectedActivity}`);
}
