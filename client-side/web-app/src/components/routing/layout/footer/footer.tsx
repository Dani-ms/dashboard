import { LinkAnchor } from 'src/components/ui-kit/protons/link-anchor/link-anchor';

export function Footer() {
  return (
    <footer className="py-4 bg-dark">
      <div className="container mr-auto text-center">
        <h3 className="mb-5 text-primary">Created By Daniela Molés</h3>
        <div className=" mr-auto mx-auto">
          <LinkAnchor
            href="https://www.linkedin.com/in/daniela-mol%C3%A9s-santos-9068a580/"
            className="btn btn-primary me-3"
          >
            LinkedIn
          </LinkAnchor>
        </div>
      </div>
    </footer>
  );
}
