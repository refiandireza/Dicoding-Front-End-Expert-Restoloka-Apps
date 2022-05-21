const Spinner = () => `
    <div class="spinner">
        <div></div>
    </div>
`;

const errorResponse = () => `
    <div class="status">
        <h1><i class="fas fa-exclamation-circle"></i></h1>
        <h2>Oops Something Wrong, Please Reload Your Page</h2>
    </div>
`;

const noFavorite = () => `
    <div class="status">
        <h1><i class="fas fa-list-alt"></i></h1>
        <h2>Oops, You don't have any favorite restaurant yet</h2>
    </div>
`;

export { Spinner, errorResponse, noFavorite };
