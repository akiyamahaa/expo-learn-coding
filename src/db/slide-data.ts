import { ImageSourcePropType } from 'react-native';
import { MemberImageProps } from '../screens/home/component/MemberImage';
import { IData } from '../types';

export const basic: IData[] = [
  {
    id: 1,
    image: require('../assets/lesson1.png'),
    title: 'Bài 1: Làm quen với Scratch',
    description:
      'Trong bài này, bạn sẽ được làm quen với Scratch, môi trường lập trình dành cho trẻ em',
    videoUrl: 'https://www.youtube.com/embed/QuZA24FEiIs?si=FWHId17-RqjjcToO',
    content: ['Scratch là gì', 'Giao diện Scratch', 'Tạo dự án đầu tiên'],
  },
  {
    id: 2,
    image: require('../assets/lesson1.png'),
    title: 'Bài 2: Tạo nhân vật',
    description:
      'Trong bài này, bạn sẽ được học cách tạo nhân vật trong Scratch',
    videoUrl: 'https://www.youtube.com/embed/QuZA24FEiIs?si=FWHId17-RqjjcToO',
    content: [
      'Tạo nhân vật trong Scratch',
      'Thay đổi, chỉnh sửa nhân vật',
      'Tạo chương trình Bắt rắn',
    ],
  },
  {
    id: 3,
    image: require('../assets/lesson1.png'),
    title: 'Bài 3: Tọa độ, di chuyển và hướng',
    description:
      'Trong bài học này, bạn sẽ hiểu về tọa độ, di chuyển và hướng trong Scratch',
    videoUrl: 'https://www.youtube.com/embed/vcUnRDfnl90?si=TYRjfjhbafP3riBV',
    content: [
      'Xác định tọa độ trên màn hình',
      'Di chuyển và thay đổi hướng',
      'Tạo chương trình Mèo bắt chuột',
    ],
  },
  {
    id: 4,
    image: require('../assets/lesson1.png'),
    title: 'Bài 4: Lệnh sự kiện',
    description:
      'Trong bài này, bạn sẽ học cách sử dụng lệnh sự kiện trong Scratch',
    videoUrl: 'https://www.youtube.com/embed/X5JZZkQLX10?si=v3HwkQ9lgjeyr28J',
    content: [
      'Các lệnh sự kiện trong Scratch',
      'Điều kiển nhân vật bằng lệnh sự kiện',
      'Tạo chương trình Chó mèo cãi nhau',
    ],
  },
  {
    id: 5,
    image: require('../assets/lesson1.png'),
    title: 'Bài 5: Lệnh điều kiện',
    description:
      'Trong bài này, bạn sẽ học cách sử dụng lệnh điều kiện trong Scratch',
    videoUrl: 'https://www.youtube.com/embed/W6ulSrQG7wk?si=sPtnubKO0EQKyuBE',
    content: [
      'Tạo các lệnh điều kiện trong Scratch',
      'Điều khiển nhân vật bằng lệnh điều kiện',
      'Tạo chương trình Đi dạo trên biển',
    ],
  },
];

export const intermediate: IData[] = [
  {
    id: 6,
    image: require('../assets/lesson2.png'),
    title: 'Bài 6: Lệnh lặp',
    description:
      'Trong bài này, bạn sẽ học cách sử dụng lệnh điều kiện trong Scratch',
    videoUrl: 'https://www.youtube.com/embed/C-9_wtp9CbY?si=UTqFO-lkTFJGtrk4',
    content: [
      'Tạo các lệnh lặp trong Scratch',
      'Điều khiển nhân vật bằng lệnh lặp',
      'Lặp lại hành động nhiều lần',
      'Tạo chương trình Trái đất quay quanh Mặt Trời',
    ],
  },
  {
    id: 7,
    image: require('../assets/lesson2.png'),
    title: 'Bài 7: Lệnh cảm biến',
    description:
      'Trong bài này, bạn sẽ học cách sử dụng lệnh cảm biến trong Scratch',
    videoUrl: 'https://www.youtube.com/embed/FyXyznhmnrA?si=z3NwKeHUtbaO5ylA',
    content: [
      'Tạo các lệnh cảm biến trong Scratch',
      'Điều khiển nhân vật bằng lệnh cảm biến',
      'Tạo chương trình Đồng hồ của em',
    ],
  },
  {
    id: 8,
    image: require('../assets/lesson2.png'),
    title: 'Bài 8: Vẽ hình nhân vật',
    description:
      'Trong bài học này, ta sẽ cùng nhau tìm hiểu cách vẽ hình nhân vật trong Scratch',
    videoUrl: 'https://www.youtube.com/embed/umgQZNQt0Ts?si=k4DG1URCUSTQQPGb',
    content: [
      'Giao diện và công cụ vẽ hình trong Scratch',
      'Luyện tập vẽ hình nhân vật',
      'Tạo chương trình Em tập lái xe',
    ],
  },
  {
    id: 9,
    image: require('../assets/lesson2.png'),
    title: 'Bài 9: Tạo âm thanh',
    description:
      'Trong bài học này, ta sẽ cùng nhau tìm hiểu cách vẽ hình nhân vật trong Scratch',
    videoUrl: 'https://www.youtube.com/embed/umgQZNQt0Ts?si=k4DG1URCUSTQQPGb',
    content: [
      'Cách tạo âm thanh cho nhân vật',
      'Các lệnh tạo âm thanh trong Scratch',
      'Tạo chương trình Nhảy theo điệu nhạc',
    ],
  },
  {
    id: 10,
    image: require('../assets/lesson2.png'),
    title: 'Bài 10: Lệnh hội thoại',
    description:
      'Trong bài học này, ta sẽ cùng nhau tìm hiểu lệnh hội thoại trong Scratch',
    videoUrl: 'https://www.youtube.com/embed/NQK0jHNRszI?si=yOneCd0oujK1PZLR',
    content: [
      'Cách tạo hội thoại trong Scratch',
      'Lệnh hội thoại trong Scratch',
      'Tạo chương trình Em tập làm phim hoạt hình',
    ],
  },
];

export const advanced: IData[] = [
  {
    id: 20,
    image: require('../assets/lesson3.jpg'),
    title: 'Dự án 1: Trò chơi bắt bóng',
    description:
      'Khóa học Scratch cơ bản giúp học sinh biết cách sử dụng công cụ Scratch để lập trình',
    videoUrl: 'https://www.youtube.com/embed/UxwGGWD1wfE?si=yMJv3U5J2OPRsd8U',
    content: [
      'Bước 1: Tạo nhân vật cái tô hứng bóng',
      'Bước 2: Tạo nhân vật bóng',
      'Bước 3: Tạo luật chơi cho trò chơi',
      'Bước 4: Tăng độ khó cho trò chơi',
      'Bước 5: Tính điểm cho trò chơi',
    ],
  },
  {
    id: 21,
    image: require('../assets/lesson3.jpg'),
    title: 'Dự án 2: Trò chơi tránh bóng',
    description:
      'Khóa học Scratch cơ bản giúp học sinh biết cách sử dụng công cụ Scratch để lập trình',
    videoUrl: 'https://www.youtube.com/embed/jhx5N_rdYG8?si=3L2G1rKHNUHSVfdr',
    content: [
      'Bước 1: Tạo nhân vật cái chú gà con',
      'Bước 2: Tạo nhân vật bóng',
      'Bước 3: Tạo luật chơi cho trò chơi',
      'Bước 4: Tăng độ khó cho trò chơi',
      'Bước 5: Tính điểm cho trò chơi',
    ],
  },
  {
    id: 22,
    image: require('../assets/lesson3.jpg'),
    title: 'Dự án 3: Trò chơi Flappy Bird',
    description:
      'Khóa học Scratch cơ bản giúp học sinh biết cách sử dụng công cụ Scratch để lập trình',
    videoUrl: 'https://www.youtube.com/embed/cvu3w2ogEgQ?si=JQPuP9RtXEXxSVdw',
    content: [
      'Bước 1: Tạo nhân vật cái chú chim',
      'Bước 2: Tạo nhân vật chướng ngại vật',
      'Bước 3: Tạo luật chơi cho trò chơi',
      'Bước 4: Tăng độ khó cho trò chơi',
      'Bước 5: Tính điểm cho trò chơi',
    ],
  },
  {
    id: 23,
    image: require('../assets/lesson3.jpg'),
    title: 'Dự án 4: Trò chơi bắn súng',
    description:
      'Khóa học Scratch cơ bản giúp học sinh biết cách sử dụng công cụ Scratch để lập trình',
    videoUrl: 'https://www.youtube.com/embed/onjT-0zHuIw?si=g5uBlN12BSHjHyCK',
    content: [
      'Bước 1: Tạo các nhân vật trong trò chơi',
      'Bước 2: Điều khiển hoạt động của nhân vật',
      'Bước 3: Tạo luật chơi cho trò chơi',
      'Bước 4: Tăng độ khó cho trò chơi',
      'Bước 5: Tính điểm cho trò chơi',
    ],
  },
];

export const populars: { image: ImageSourcePropType; lesson: IData }[] = [
  {
    image: require('../assets/popular-image1.png'),
    lesson: basic[0],
  },
  {
    image: require('../assets/popular-image2.png'),
    lesson: basic[1],
  },
  {
    image: require('../assets/popular-image3.png'),
    lesson: intermediate[0],
  },
  {
    image: require('../assets/popular-image4.png'),
    lesson: intermediate[1],
  },
  {
    image: require('../assets/popular-image5.png'),
    lesson: advanced[1],
  },
];

export const headerSlideData: MemberImageProps[] = [
  {
    name: 'slideimg',
    image: require('../assets/slide1.png'),
    lesson: basic[0],
  },
  {
    name: 'slideimg',
    image: require('../assets/slide1.png'),
    lesson: intermediate[0],
  },
  {
    name: 'slideimg',
    image: require('../assets/slide1.png'),
    lesson: advanced[0],
  },
];
