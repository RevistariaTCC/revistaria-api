import app from './app';

app.listen({ host: '0.0.0.0', port: 4000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀🚀 Server listening at ${address} 🚀🚀`);
});
