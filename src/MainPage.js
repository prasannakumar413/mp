import React from 'react';
import './MainPage.css'; // Import your custom CSS file

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="slider-container">
        
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAZwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAZEAEBAQEBAQAAAAAAAAAAAAAAAQIREgP/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUH/8QAGxEBAQADAQEBAAAAAAAAAAAAAAECAxESEwT/2gAMAwEAAhEDEQA/APn2fm6Zw6TLcy+Hcn6lhpkc5hqZdJleM3J3mqOflfLpxeJ1v5xy8nl14cOr8443KeXaxOL1m644XDGsPTcs3KzJyy0x5NfNHpuRv0890TrrI1INOL6OOKcUVG+IKCoKAnDigcZqWNJVZuLFg1wXrn5WLBWXaACKACgAAAgiijNFBngqRRYAIoAKAAAAAioADPUViVqVWZWhnq9RvqiKKAACHQ6CWlozadGbUVz9MTTc082dtzbdxefDbHolOuU0s0zx2mx16dY9HpON+4306x6PRw9xvqdY9JdLxm5t2s3TN0xrazFzy2Ru6HDW1a8uF3RyzjTrMV2mG5kuZh+fjjM1qZrr5Xyz6eiaXLzV8114cT018nLzTzXbieTq/Nx81m5r0eU8npm6nmuKxrFevyzctTJyy0PFr56R7Lgb9vPfzOsjXBXB9SQAGgAAAAAOIljQJYxYNUXrHkUEdABAAFAAAAAFRABH/9k=" alt="Slider 1" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAB9CAMAAADKvTzkAAAAZlBMVEX//wD//////2n//77//z///6z//9L//0XLywD//zL//5z//+f//2H//9j//7v///D//3z//3b//4n//3H//yP///f//5b//6b//4T///v//8f//8z//+z//6H//0///+L//1j//7Pyk4lfAAACEElEQVR4nO3cyXKjMBQFUM1EDEYgMY/+/59sxdVJ2Ymh7HQV4PQ9xYKFFvdZ7wmtTN7Iy/sFJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/GdcFg5G753iX7g8ohdFKPbO8lOBop8itrJQx4SMweWtFaXcKN5DsoJeK5dXjpT55/0tKAKebBXwAfq2Bkrt8lqZVIrUUxTqNDgpwqN0lC2ZJEnj7QLf032pgUbLcyHSYtZ9mDeBL6KrG11NZsqSzkxuw8TfmUvumypWmp0rMjYtb+f3IsqCxL2OurJVfLvA97Q+dc3ldRH98s/qe8glFcuEnwk1F0Z1JKFC0rXjYAOUNrZv2M1WjIur89CPN1fSnbV/NYoHxHBnuw0D3yEobUs6TX/jJ5cpz/fN9DS/BcZ3VFHVkcwTObZDuToUh+SLYP58kqpUOWtlPUYDpdXeqZ7k20mWaWJqZqY4tH1YD6/XTn6wC1ly2nwMdZFQGuwd6lnt12/d2hGrnRY2mK2IrWbMxZrYQ9x87fcilm9PsbADE+fYP3E4GlMbtnLV2pB6fCMc74wc3Slw52Aux1rbllT7Xjg+pLc1NMufOhGetMw0t/6JK1brjB+liLG/rqEwyyt1lhP/yR6IK8lsCRtycT7KSeaSq156uZPpk+GXnmrUMcb0p/y5mc3jMfobAABeyS/4o/q3PxvLGBEvDJ6xAAAAAElFTkSuQmCC" alt="Slider 2" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB2CAMAAACjzcIPAAAAZlBMVEUA/wD///89/z3h/+GO/47p/+ny//Jj/2N+/35o/2hC/0K0/7Ts/+wb/xuh/6FN/03a/9pw/3Cb/5t6/3ql/6Vc/1z4//iW/5Yr/yvE/8SK/4rT/9PO/868/7yp/6lX/1fJ/8mu/64D3PYUAAAB50lEQVR4nO3c226rMBAFUI/NxVwMxoYADiTl/3+y0EjNpfJReqRiIe2lPIA0DxuYzCh5gGXsmI6aGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+Um6Ls5hMo0IH+S1T0o0+1ksVeEx38z8KnRbjbqnewAXRW9El2TxlNotYf+nYtY3UtTFRwAZ7Dk5kfIXnQjUdO4m+EjYekn6qIoqSfs+sT+RLcDoNnkp9yUXJkoaddSHcaT7PTq+Xs2vaB0oTlfN4eojeekr7ZLDxlnz8qGtO8jpEmulgybs1ahMv00Ny4atd4rhgU8ryaf2mVkI0dmaFt7n+miWSmpbkFjre7n3CfcXD2khbLymuvk6U2j6BGEqu2yA38biIMdPLSKc0VJhfMSTWhomrD12n08V2oj1KcrkGFUnrGjnLqil7O1KShw71lnQdLX2V3GeipjJ0pvcMr4uIaPGUKp4ryZVjXVTLaD1kzjf6d2F+JPeNltpJl8qe94azVjVZZHi4BbopX4L7FhFzo3NKLqxtHR/telgw3+PZR508BZ+8hVWbyVQaXlWcLapJo4oHW0M3/HH1j/7WrXPFbT04vk7NlHHbDS70FOLF92QJ27j/gRstYjHJw/2a+3LM1AAA+zrWn1532Sdz1BU52x/7zAAAAABJRU5ErkJggg==" alt="Slider 3" />
      </div>
      
      <div className="button-container">
        <button className="admin-button">ADMIN</button>
        <button className="seller-button">SELLER</button>
        <button className="bidder-button">BIDDER</button>
      </div>
    </div>
  );
};

export default MainPage;
