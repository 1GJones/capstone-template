i

const BookUpload = () => {
  return(
    <>
    <form>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Author:
        <input type="text" name="author" />
      </label>
      <label>
        Description:
        <textarea type="text" name="description" />
      </label>
    </form>

    </>
  )
}
export default BookUpload;