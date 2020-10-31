const express = require('express');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
let membersDB = require('../../modules/members');
const { response } = require('express');

router.post('/', (req,res)=>{
    const {name, part, age} = req.body;

    // 클라랑 협업시 헤더랑 바디를 깔 일이 많다. 상태코드 똑같이 보내야함. 쉽게 확인하려고 statusCode 보내는 것도 있고.ㅇㅇ
    if(!name || !part || !age){ // 이런 에러처리 중요. 클라이언트를 100% 믿을 수 없기 때문.
        console.log('필요한 값이 없습니다!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    const idx = membersDB[membersDB.length - 1].idx + 1;
    membersDB.push({
        idx,
        name,
        part,
        age
    });
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_CREATE_SUCCESS, membersDB));
});

router.get('/', (req,res)=>{
    const members = membersDB;
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_READ_ALL_SUCCESS, members));
});

router.get('/:idx', (req,res)=>{
    const {idx} = req.params;
    if(!idx){
        console.log('필요한 값이 없습니다!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const member = membersDB.find(member=>member.idx == idx);
    membersDB.find((member)=>{
        // 각각의 멤버에 대해 아래를 만족하는지 확인.
        member.idx == idx
    })

    if(member === undefined){
        console.log('idx가 유효하지 않습니다');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_READ_SUCCESS, member));
});

router.delete('/:idx', (req,res)=>{
    const {idx} = req.params;

    if(!idx){
        console.log('필요한 값이 없습니다!');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const member = membersDB.filter(member => member.idx == idx);
    if(member.length === 0){
        console.log('idx가 유효하지 않습니다');
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }
    membersDB = membersDB.filter(member => member.idx != idx);
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_DELETE_SUCCESS, membersDB));
});

router.put('/:idx', (req,res)=>{
    // 이건 집에서 해오는걸로~
});

module.exports = router;