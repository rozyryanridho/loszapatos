const Bread=()=> {
    return(
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#"><i class="fas fa-arrow-left" style="padding-right: 2px;"></i>Back</a></li>
        <li><a href="#">Bulma</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Components</a></li>
        <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
      </ul>
    </nav>
    )
}

export default Bread;