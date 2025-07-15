import React, { useState } from 'react';
import './App.css';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setValue(month, year) {
  const row = [];
  const daysInMonth = new Date(year, month, 0).getDate();
  for (let i = 0; i < daysInMonth; i++) {
    const day = new Date(year, month - 1, i + 1);
    const val = day.getDay();
    if (![0, 6].includes(val)) {
      const valIn = `08:${getRndInteger(15, 29)}`;
      const valOut = `17:${getRndInteger(31, 55)}`;
      row.push(valIn, valOut);
    } else {
      row.push('', '');
    }
  }
  return [row];
}

function App() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [spreadsheetId, setSpreadsheetId] = useState('');
  const [startCell, setStartCell] = useState('');
  const [sheetName, setSheetName] = useState('');
  const [values, setValues] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!month || !year || !spreadsheetId || !startCell || !sheetName) {
      setMessage('Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    const data = setValue(Number(month), Number(year));
    setValues(data);

    // Gửi dữ liệu lên Apps Script
    setMessage('Đang gửi dữ liệu lên Google Sheets...');
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzL_vkPjTu7vE_oSflISwF15ipQMbNqKeBmAy79QnLwkPl5ew8zLWdnrqubLR1Z5mEATg/exec', {
        method: 'POST',
        body: JSON.stringify({
          spreadsheetId,
          sheetName,
          startCell,
          values: data
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      if (result.success) {
        setMessage('Ghi dữ liệu thành công vào Google Sheets!');
      } else {
        setMessage('Lỗi: ' + (result.error || 'Không xác định'));
      }
    } catch (err) {
      setMessage('Lỗi khi gửi dữ liệu: ' + err.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Auto Out-In Google Sheets</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
          <input type="number" placeholder="Tháng (1-12)" value={month} onChange={e => setMonth(e.target.value)} min="1" max="12" required />
          <input type="number" placeholder="Năm (vd: 2024)" value={year} onChange={e => setYear(e.target.value)} min="2000" required />
          <input type="text" placeholder="Spreadsheet ID" value={spreadsheetId} onChange={e => setSpreadsheetId(e.target.value)} required />
          <input type="text" placeholder="Ô bắt đầu (vd: C16)" value={startCell} onChange={e => setStartCell(e.target.value)} required />
          <input type="text" placeholder="Tên sheet" value={sheetName} onChange={e => setSheetName(e.target.value)} required />
          <button type="submit">ok</button>
        </form>
      </header>
    </div>
  );
}

export default App;
