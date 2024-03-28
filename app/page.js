// app/page.js
import ROICalculator from './components/ROICalculator';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <ROICalculator />
    </div>
  );
  }