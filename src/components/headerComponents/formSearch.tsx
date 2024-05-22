export const FormSearch = () => {
    return (
        <div>
            <form action='post' className='fixed right-0 top-4'>
                <input type='search' name='search' id='search' className="bg-transparent border border-gray-800 rounded-md" />
                <button type='submit'>buscar</button>
            </form>
        </div>
    );
};
