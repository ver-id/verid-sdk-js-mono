# Contributing to Ver.ID SDK JS Monorepo

Thank you for your interest in contributing to the Ver.ID SDK! We welcome contributions from the community.

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)
- Git

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/verid-sdk-js-mono.git
   cd verid-sdk-js-mono
   ```

3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/ver-id/verid-sdk-js-mono.git
   ```

4. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

## Development Workflow

### Creating a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:
- `feature/` - for new features
- `fix/` - for bug fixes
- `docs/` - for documentation changes
- `chore/` - for maintenance tasks

### Making Changes

1. **Make your changes** in the appropriate package(s)

2. **Run tests** to ensure everything works:
   ```bash
   # Run tests for affected projects
   npx nx affected -t test
   
   # Or run tests for a specific project
   npx nx test @ver-id/graphql-client
   ```

3. **Run linting**:
   ```bash
   # Lint affected projects
   npx nx affected -t lint
   
   # Or lint a specific project
   npx nx lint @ver-id/graphql-client
   ```

4. **Run type checking**:
   ```bash
   npx nx affected -t typecheck
   ```

5. **Build the project**:
   ```bash
   npx nx affected -t build
   ```

### Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Examples:**
```bash
git commit -m "feat(graphql-client): add new query helper function"
git commit -m "fix(browser-client): resolve cache cleanup issue"
git commit -m "docs: update installation instructions"
```

### Pushing Your Changes

```bash
git push origin feature/your-feature-name
```

## Submitting a Pull Request

1. **Sync with upstream** before creating a PR:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push your changes** to your fork

3. **Create a Pull Request** on GitHub:
   - Go to the [repository](https://github.com/ver-id/verid-sdk-js-mono)
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template with:
     - Clear description of changes
     - Related issue number (if applicable)
     - Testing steps
     - Screenshots (if UI changes)

4. **Address review feedback**:
   - Make requested changes
   - Commit and push updates
   - Re-request review when ready

### Pull Request Checklist

Before submitting, ensure:

- [ ] Code follows the project's style guidelines
- [ ] Tests pass locally (`npx nx affected -t test`)
- [ ] Linting passes (`npx nx affected -t lint`)
- [ ] Type checking passes (`npx nx affected -t typecheck`)
- [ ] Build succeeds (`npx nx affected -t build`)
- [ ] Commit messages follow conventional commits format
- [ ] Documentation is updated (if needed)
- [ ] Changes are described in the PR description

## Project Structure

```
verid-sdk-js-mono/
├── packages/
│   ├── graphql-client/    # GraphQL client for Ver.ID API
│   └── browser-client/    # Browser-specific client
├── libs/
│   └── core/              # Shared core functionality
├── .github/
│   └── workflows/         # CI/CD workflows
└── nx.json                # Nx configuration
```

## Running Specific Tasks

### For a specific package:
```bash
npx nx test @ver-id/graphql-client
npx nx lint @ver-id/browser-client
npx nx build @ver-id/graphql-client
```

### For all affected projects:
```bash
npx nx affected -t test
npx nx affected -t lint
npx nx affected -t build
```

### For all projects:
```bash
npx nx run-many -t test
npx nx run-many -t lint
npx nx run-many -t build
```

## GraphQL Code Generation

If you modify GraphQL queries in `packages/graphql-client`:

```bash
npx nx run @ver-id/graphql-client:codegen
```

## Testing

### Unit Tests
```bash
npx nx test <project-name>
```

### Watch Mode
```bash
npx nx test <project-name> --watch
```

## Code Style

- We use ESLint for linting
- We use Prettier for code formatting (via ESLint)
- TypeScript strict mode is enabled
- Follow existing code patterns in the project

## Getting Help

- Check existing [Issues](https://github.com/ver-id/verid-sdk-js-mono/issues)
- Review [Pull Requests](https://github.com/ver-id/verid-sdk-js-mono/pulls)
- Read the [Code of Conduct](CODE_OF_CONDUCT.md)

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you for contributing! 🎉
