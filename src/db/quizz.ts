import { ImageSourcePropType } from 'react-native';

export interface QuizzData {
  image?: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      ques: 'Scratch là gì?',
      choose: [
        'a. Một ngôn ngữ lập trình dành cho trẻ em',
        'b. Một trò chơi',
        'c. Một phần mềm xử lý văn bản',
      ],
      ans: 0,
    },
    {
      ques: 'Trong Scratch, nhân vật được gọi là gì?',
      choose: ['a. Code', 'b. Sprite', 'c. Background'],
      ans: 1,
    },
    {
      ques: 'Khối lệnh nào dùng để di chuyển nhân vật?',
      choose: ['a. Say', 'b. Move', 'c. Turn'],
      ans: 1,
    },
    {
      ques: 'Khối lệnh nào để thay đổi kích thước của Sprite?',
      choose: ['a. Change size by', 'b. Move', 'c. Glide'],
      ans: 0,
    },
    {
      ques: 'Khối lệnh “forever” trong Scratch có chức năng gì?',
      choose: [
        'a. Kết thúc chương trình',
        'b. Chạy một hành động một lần',
        'c. Lặp lại một hành động mãi mãi',
      ],
      ans: 2,
    },
    {
      ques: 'Trong Scratch, khối lệnh nào dùng để phát âm thanh?',
      choose: ['a. Play sound', 'b. Move', 'c. Change costume'],
      ans: 0,
    },
    {
      ques: 'Khối lệnh “wait 1 second” làm gì?',
      choose: [
        'a. Thay đổi trang phục sau 1 giây',
        'b. Di chuyển nhân vật 1 giây',
        'c. Khối lệnh “wait 1 second” làm gì?',
      ],
      ans: 2,
    },
    {
      ques: 'Khối lệnh “when green flag clicked” có tác dụng gì?',
      choose: [
        'a. Kết thúc chương trình',
        'b. Di chuyển nhân vật',
        'c. Bắt đầu chương trình',
      ],
      ans: 2,
    },
    {
      ques: 'Khối lệnh nào giúp thay đổi trang phục của Sprite?',
      choose: ['a. Change costume', 'b. Move', 'c. Say'],
      ans: 0,
    },
  ],
  medium: [
    {
      ques: 'Khối lệnh “forever” trong Scratch có chức năng gì?',
      choose: [
        'a. Kết thúc chương trình',
        'b. Chạy một hành động một lần',
        'c. Lặp lại một hành động mãi mãi',
      ],
      ans: 2,
    },
    {
      ques: 'Trong Scratch, khối lệnh nào dùng để phát âm thanh?',
      choose: ['a. Play sound', 'b. Move', 'c. Change costume'],
      ans: 0,
    },
    {
      ques: 'Khối lệnh “wait 1 second” làm gì?',
      choose: [
        'a. Thay đổi trang phục sau 1 giây',
        'b. Di chuyển nhân vật 1 giây',
        'c. Khối lệnh “wait 1 second” làm gì?',
      ],
      ans: 2,
    },
    {
      ques: 'Khối lệnh “when green flag clicked” có tác dụng gì?',
      choose: [
        'a. Kết thúc chương trình',
        'b. Di chuyển nhân vật',
        'c. Bắt đầu chương trình',
      ],
      ans: 2,
    },
    {
      ques: 'Khối lệnh nào giúp thay đổi trang phục của Sprite?',
      choose: ['a. Change costume', 'b. Move', 'c. Say'],
      ans: 0,
    },
  ],
  hard: [
    {
      ques: 'Scratch là gì?',
      choose: [
        'a. Một ngôn ngữ lập trình dành cho trẻ em',
        'b. Một trò chơi',
        'c. Một phần mềm xử lý văn bản',
      ],
      ans: 0,
    },
    {
      ques: 'Trong Scratch, nhân vật được gọi là gì?',
      choose: ['a. Code', 'b. Sprite', 'c. Background'],
      ans: 1,
    },
    {
      ques: 'Khối lệnh nào dùng để di chuyển nhân vật?',
      choose: ['a. Say', 'b. Move', 'c. Turn'],
      ans: 1,
    },
    {
      ques: 'Khối lệnh nào để thay đổi kích thước của Sprite?',
      choose: ['a. Change size by', 'b. Move', 'c. Glide'],
      ans: 0,
    },
    {
      ques: 'Khối lệnh “forever” trong Scratch có chức năng gì?',
      choose: [
        'a. Kết thúc chương trình',
        'b. Chạy một hành động một lần',
        'c. Lặp lại một hành động mãi mãi',
      ],
      ans: 2,
    },
    {
      ques: 'Trong Scratch, khối lệnh nào dùng để phát âm thanh?',
      choose: ['a. Play sound', 'b. Move', 'c. Change costume'],
      ans: 0,
    },
    {
      ques: 'Khối lệnh “wait 1 second” làm gì?',
      choose: [
        'a. Thay đổi trang phục sau 1 giây',
        'b. Di chuyển nhân vật 1 giây',
        'c. Khối lệnh “wait 1 second” làm gì?',
      ],
      ans: 2,
    },
    {
      ques: 'Khối lệnh “when green flag clicked” có tác dụng gì?',
      choose: [
        'a. Kết thúc chương trình',
        'b. Di chuyển nhân vật',
        'c. Bắt đầu chương trình',
      ],
      ans: 2,
    },
    {
      ques: 'Khối lệnh nào giúp thay đổi trang phục của Sprite?',
      choose: ['a. Change costume', 'b. Move', 'c. Say'],
      ans: 0,
    },
  ],
};
