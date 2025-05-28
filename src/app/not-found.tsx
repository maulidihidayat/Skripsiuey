// pages/404.js
const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>404 - Halaman Tidak Ditemukan</h1>
    </div>
  );
};

NotFoundPage.getLayout = function PageLayout(page:any) {
  return page; // tidak pakai layout
};

export default NotFoundPage;
