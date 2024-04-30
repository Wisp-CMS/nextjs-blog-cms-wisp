import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const BlogPostsPagination = ({
  pagination,
  basePath = "/?page=",
  numSiblingPages = 2,
}: {
  basePath?: string;
  numSiblingPages?: number;
  pagination: {
    page: number;
    limit: number | "all";
    totalPages: number;
    nextPage: number | null;
    prevPage: number | null;
  };
}) => {
  return (
    <Pagination>
      <PaginationContent>
        {pagination.prevPage && (
          <PaginationItem>
            <PaginationPrevious href={`${basePath}${pagination.prevPage}`} />
          </PaginationItem>
        )}
        {pagination.page > 3 && (
          <>
            <PaginationItem>
              <PaginationLink href={`${basePath}1`}>1</PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
          </>
        )}
        {Array.from({ length: pagination.totalPages }, (_, index) => index + 1)
          .filter(
            (pageNumber) =>
              Math.abs(pagination.page - pageNumber) <= numSiblingPages
          )
          .map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={`${basePath}${pageNumber}`}
                isActive={pageNumber === pagination.page}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
        {pagination.page < pagination.totalPages - 2 && (
          <>
            <PaginationEllipsis />
            <PaginationItem>
              <PaginationLink href={`${basePath}${pagination.totalPages}`}>
                {pagination.totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        {pagination.nextPage && (
          <PaginationItem>
            <PaginationNext href={`${basePath}${pagination.nextPage}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
