import { execSync } from 'child_process';

try {
  console.log('Running pnpm install --no-frozen-lockfile...');
  const output = execSync('pnpm install --no-frozen-lockfile', {
    cwd: '/vercel/share/v0-project',
    stdio: 'pipe',
    encoding: 'utf-8',
  });
  console.log(output);
  console.log('Dependencies installed and lockfile updated successfully.');
} catch (error) {
  console.error('Error:', error.stdout || error.message);
  process.exit(1);
}
