export const showSuccessMessage = (success) => (
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    {success}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);
export const showErrorMessage = (error) => (
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    {error}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);
