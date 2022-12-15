/**
 * 메모 데이터 객체
 */
export class Memo {
    /**
     * 메모 데이터 생성자
     * @param {number} id - 시간을 id로 사용
     * @param {string} title - 제목
     * @param {string} content - 내용
     */
    constructor({id, title, content}) {
        this.id = id;
        this.title = title;
        this.content = content;
        console.log();
    }
}
