// Erstmeldung Datatable
new DataTable('#doc-hub-erstmeldung-datatable', {
  info: false,
  ordering: true,
  paging: false,
  columnDefs: [
    {targets: [0, 1, 2], className: "dt-header-left dt-body-left doc-hub-datable-header-left"},
  ],
  language: {
    search: "Suchen:",
  }
});

// Korrekturmeldung Datatable
new DataTable('#doc-hub-korrekturmeldung-datatable', {
  info: false,
  ordering: true,
  paging: false,
  searching: false,
  autoWidth: false,
  columnDefs: [
    {targets: [0, 1], className: "dt-head-left dt-body-left doc-hub-datable-header-left"},
    {targets: 2, className: "dt-head-center dt-body-center"},
    {
      targets: 2,
      orderable: true,
      searchable: false,
      className: 'doc-hub-select-checkbox',
      render: function () {
        return '<input type="checkbox">';
      }
    }
  ],
  select: {
    style: 'os',
  }
});

new DataTable('#doc-hub-korrekturmeldung-reference-child-datatable', {
  info: false,
  ordering: true,
  paging: false,
  searching: false,
  autoWidth: false,
  columnDefs: [
    {targets: [0, 1, 2], className: "dt-head-left dt-body-left doc-hub-datable-header-left"},
    {targets: 3, className: "dt-head-center dt-body-center"},
    {
      targets: 3,
      orderable: true,
      searchable: false,
      className: 'doc-hub-select-checkbox',
      render: function () {
        return '<input type="checkbox">';
      }
    }
  ],
  select: {
    style: 'os',
  }
});


// Loschung Datatable
new DataTable('#doc-hub-loschung-datatable', {
  info: false,
  ordering: true,
  paging: false,
  searching: false,
  autoWidth: false,
  columnDefs: [
    {targets: [0, 1], className: "dt-head-left dt-body-left doc-hub-datable-header-left"},
    {targets: 2, className: "dt-head-center dt-body-center"},
    {
      targets: 2,
      orderable: true,
      searchable: false,
      className: 'doc-hub-select-checkbox',
      render: function () {
        return '<input type="checkbox">';
      }
    }
  ],
  select: {
    style: 'os',
  }
});

new DataTable('#doc-hub-loschung-reference-child-datatable', {
  info: false,
  ordering: true,
  paging: false,
  searching: false,
  autoWidth: false,
  columnDefs: [
    {targets: [0, 1, 2], className: "dt-head-left dt-body-left doc-hub-datable-header-left"},
    {targets: 3, className: "dt-head-center dt-body-center"},
    {
      targets: 3,
      orderable: true,
      searchable: false,
      className: 'doc-hub-select-checkbox',
      render: function () {
        return '<input type="checkbox">';
      }
    }
  ],
  select: {
    style: 'os',
  }
});
