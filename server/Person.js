
create=(personId)=>{
    const query = `create (p: Person{id : ${personId}) return p`
}
remove=()=>{

}


module.exports = {create,remove};
