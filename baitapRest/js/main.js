DOM = (id) => document.getElementById(id);

avg = (...danhSachDiem) => {
  let sum = 0;
  danhSachDiem.forEach((diem) => (sum += parseFloat(diem)));
  return (sum / danhSachDiem.length).toFixed(1);
};

DOM("btnKhoi1").onclick = () => {
  let diemToan = DOM("inpToan").value;
  let diemLy = DOM("inpLy").value;
  let diemHoa = DOM("inpHoa").value;
  DOM("tbKhoi1").innerHTML = avg(diemToan, diemLy, diemHoa);
};

DOM("btnKhoi2").onclick = () => {
  let diemVan = DOM("inpVan").value;
  let diemSu = DOM("inpSu").value;
  let diemDia = DOM("inpDia").value;
  let diemEnglish = DOM("inpEnglish").value;
  DOM("tbKhoi2").innerHTML = avg(diemVan, diemSu, diemDia, diemEnglish);
};
